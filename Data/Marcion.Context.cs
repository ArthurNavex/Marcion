using Microsoft.EntityFrameworkCore;
using Marcion.Entitys;

namespace Marcion.Data;

public class MarcionContext :DbContext
{
    public MarcionContext(DbContextOptions<MarcionContext> options) : base(options) {
        
    }
    public DbSet<Produto> Produtos{get; set;}
    public DbSet<Pedido> Pedidos {get; set;}
    public DbSet<ItemPedido> ItensPedidos {get; set;}
    public DbSet<Cliente> Clientes {get; set;}
}