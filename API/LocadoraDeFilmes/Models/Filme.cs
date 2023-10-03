namespace LocadoraDeFilmes.Models;
public class Filme
{

    public int FilmeID { get; set; }
    public string? Nome { get; set; }

    public int Classif_ind { get; set; }
    public int Ano_lanc { get; set; }
    public Boolean Alugado { get; set; }

    public List<Categoria> Categorias { get; set; }

}
