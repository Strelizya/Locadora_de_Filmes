using Microsoft.EntityFrameworkCore;
using LocadoraDeFilmes.Models;

namespace LocadoraDeFilmes.Data;

public class AppDataContext : DbContext
{
    public AppDataContext(DbContextOptions<AppDataContext> options) : base(options) { }

<<<<<<< HEAD
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {

=======
    public DbSet<Usuario> Usuarios { get; set; }
    public DbSet<Filme> Filmes { get; set; }
    public DbSet<Genero> Generos { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
>>>>>>> eb542251734743b08d91266cb8ebcf28c08710e5
        base.OnModelCreating(modelBuilder);
    }
}
