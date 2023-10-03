namespace LocadoraDeFilmes.Models;
public class Filme
{
    public int FilmeID { get; set; }
    public string? Nome { get; set; }
    public int Classif_ind { get; set; }
    public int Ano_lanc { get; set; }
    public Boolean Alugado { get; set; }

<<<<<<< HEAD
    public List<Categoria> Categorias { get; set; }
=======
    //Genero
>>>>>>> eb542251734743b08d91266cb8ebcf28c08710e5

    public Genero? Genero { get; set; }
    public int GeneroID { get; set; }
}
