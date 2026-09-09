using Marcion.Data;
using Marcion.Entitys;
using Marcion.Models.ItemPedido;
using Marcion.Models.Pedido;
using Microsoft.AspNetCore.Mvc;

namespace Marcion.Controllers;

[ApiController]
[Route("api/[controller]")]

public class PedidoController : ControllerBase
{
    public readonly MarcionContext _context;

    public PedidoController(MarcionContext context)
    {
        _context = context;
    }

    [HttpPost]
    public IActionResult Post (CreatePedidoRequest request)
    {
        var cliente = _context.Clientes.FirstOrDefault(cliente => cliente.Id == request.ClienteId);
        var itensPedido = new List<ItemPedido>();

        if (cliente == null)
        {
            return NotFound();
        }

        foreach (var itemPedidoRequest in request.Itens)
        {
            var produto = _context.Produtos
            .FirstOrDefault(produto => produto.Id == itemPedidoRequest.ProdutoId);
            if (produto == null)
            {
                return NotFound("Item não encontrado");
            }

            var itemPedido = new ItemPedido
            {
                ProdutoId = produto.Id,
                Produto = produto,
                Quantidade = itemPedidoRequest.Quantidade,
                PrecoUnitario = produto.PrecoUnitario,
                SubTotal = produto.PrecoUnitario * itemPedidoRequest.Quantidade            
            };

            itensPedido.Add(itemPedido);
        }

        var pedido = new Pedido
        {
            Cliente = cliente,
            ClienteId = cliente.Id,
            Itens = itensPedido,
            Data = DateTime.Now,
            PrecoFinal = itensPedido.Sum(item => item.SubTotal)
        };
        
        _context.Pedidos.Add(pedido);
        _context.SaveChanges();

        var response = new PedidoResponse
        {
            Id = pedido.Id,
            NomeCliente = cliente.Nome,
            DataPedido = pedido.Data,
            Itens = pedido.Itens.Select(item => new ItemPedidoResponse
            {
                Id = item.Id,
                NomeProduto = item.Produto.Nome,
                ProdutoId = item.ProdutoId,
                Quantidade = item.Quantidade,
                PrecoUnitario = item.PrecoUnitario,
                SubTotal = item.SubTotal
            }).ToList(),
            PrecoTotal = pedido.PrecoFinal
        };

        return Ok(response);
    }
}