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
        }

        return Ok();
    }
}