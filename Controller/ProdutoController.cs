using Marcion.Data;
using Marcion.Entitys;
using Marcion.Models.Produto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Marcion.Controllers;

[ApiController]
[Route("api/[controller]")]

public class ProdutoController : ControllerBase
{
    private readonly MarcionContext _context;

    public ProdutoController (MarcionContext context)
    {
        _context = context;
    }

    [HttpPost]
    public IActionResult Post (CreateProdutoRequest request)
    {
        var ProdutoCriado = new Produto
        {
            Nome = request.Nome,
            PrecoUnitario = request.Preco,
            Estoque = request.Estoque
        };

        var response = new ProdutoResponse
        {
            Id = ProdutoCriado.Id,
            Nome = ProdutoCriado.Nome,
            Preco = ProdutoCriado.PrecoUnitario,
            Estoque = ProdutoCriado.Estoque
        };

        _context.Produtos.Add(ProdutoCriado);
        _context.SaveChanges();

        return Ok(response);
    }

    [HttpGet]
    public IActionResult Get()
    {
        var produtos = _context.Produtos.ToList();
        var response = new List<ProdutoResponse>();

        foreach (var produto in produtos)
        {
            response.Add(new ProdutoResponse
            {
                Id = produto.Id,
                Nome = produto.Nome,
                Preco = produto.PrecoUnitario,
                Estoque = produto.Estoque 
            });
        };

        return Ok(response);
    }

    

}