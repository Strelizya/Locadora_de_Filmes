<<<<<<< HEAD
namespace LocadoraDeFilmes.Models;
public class Usuario
{
    public int Cpf { get; set; }
    public string? Nome { get; set; }
    public int Idade { get; set; }

}
=======
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

>>>>>>> eb542251734743b08d91266cb8ebcf28c08710e5
