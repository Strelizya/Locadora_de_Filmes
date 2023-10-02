using System.ComponentModel.DataAnnotations;

namespace LocadoraDeFilmes.Models;
public class Usuario
{
    [Key]
    public int Cpf { get; set; }
    // O [KEY] Marca como chave primaria o cpf do usuario
    public int Idade { get; set; }
    public string? Nome { get; set; }

}

