using Microsoft.EntityFrameworkCore;
using LocadoraDeFilmes.Models;

namespace LocadoraDeFilmes.Data;

public class AppDataContext : DbContext
{
    public AppDataContext(DbContextOptions<AppDataContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {

        base.OnModelCreating(modelBuilder);
    }
}
