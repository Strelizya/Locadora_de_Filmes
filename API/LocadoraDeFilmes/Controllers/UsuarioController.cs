using LocadoraDeFilmes.Data;
using LocadoraDeFilmes.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LocadoraDeFilmes.Controllers;
[ApiController]
[Route("api/usuario")]
public class UsuarioController : ControllerBase
{
    private readonly AppDataContext _ctx;
    public UsuarioController(AppDataContext ctx)
    {
        _ctx = ctx;
    }

    [HttpPost]
    [Route("cadastrar")]
    public ActionResult Cadastrar([FromBody] Usuario usuario)
    {
        try
        {
            _ctx.Usuarios.Add(usuario);
            _ctx.SaveChanges();
            return Created("", usuario);
          
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpGet]
    [Route("listar")]
    public ActionResult Listar(){
        try
        {
            var usuarios = _ctx.Usuarios.ToList();

            if (usuarios.Count == 0){
                return NotFound("Nenhum Usuário Encontrado.");
            }
            return usuarios.Count == 0? NotFound() : Ok(usuarios);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }    

    [HttpGet]
    [Route("buscar/{cpf}")]
    public IActionResult Buscar([FromRoute] int cpf)
    {
        try
        {
            Usuario? usuarioCadastrado = _ctx.Usuarios.FirstOrDefault(x => x.Cpf == cpf);

            if (usuarioCadastrado != null)
            {
                return Ok(usuarioCadastrado);
            }

            return NotFound($"Nenhum Usuário encontrado com o cpf '{cpf}'.");
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpPut]
    [Route("alterar/{cpf}")]
    public IActionResult Alterar([FromRoute] int cpf, [FromBody] Usuario Usuario)
    {
        try
        {
            Usuario? usuarioCadastrado = _ctx.Usuarios.FirstOrDefault(X => X.Cpf == cpf);
            if (usuarioCadastrado != null)
            {
                usuarioCadastrado.Nome = Usuario.Nome;
                usuarioCadastrado.Idade = Usuario.Idade;
                _ctx.Usuarios.Update(usuarioCadastrado);
                _ctx.SaveChanges();

                return Ok(usuarioCadastrado);
            }
            return NotFound();
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }


    [HttpDelete]
    [Route("deletar/{cpf}")]
    public IActionResult Deletar([FromRoute] int cpf){
        try
        {
            Usuario? usuarioCadastrado = _ctx.Usuarios.Find(cpf);
            if(usuarioCadastrado != null){
                _ctx.Usuarios.Remove(usuarioCadastrado);
                _ctx.SaveChanges();
                return Ok($"Usuário com o cpf {cpf} foi Deletado.");
            }

            return NotFound("Usuário não foi encontrado!");
        }
        catch (Exception e) 
        {
            return BadRequest(e.Message);
        }
    }



}