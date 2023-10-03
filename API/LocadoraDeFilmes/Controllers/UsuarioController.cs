// using System.Collections.Generic;
// using System.Linq;
// using LocadoraDeFilmes.Data;
// using LocadoraDeFilmes.Models;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;

// namespace LocadoraDeFilmes.Controllers;
// [ApiController]
// [Route("locadora/usuario")]
// public class UsuarioController : ControllerBase{

//     private readonly AppDataContext _ctx;
//     public UsuarioController(AppDataContext ctx)
//     {
//         _ctx = ctx;
//     }

//     [HttpGet]
//     [Route("listar")]
//     public IActionResult Listar()
//     {
//         try
//         {
//             //Include
//             List<Usuario> usuarios =
//                 _ctx.Usuarios.
//                 Include(x => x.Categoria).
//                 ToList();

//             return usuarios.Count == 0 ? NotFound() : Ok(usuarios);
//         }
//         catch (Exception e)
//         {
//             return BadRequest(e.Message);
//         }
//     }


// }