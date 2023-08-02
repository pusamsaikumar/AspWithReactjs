using createupcs.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data.SqlTypes;

namespace createupcs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeptController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public DeptController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        // create Post Dept store data
        [HttpPost]
        [Route("CreateStore")]
        public Response CreateStore(DeptStore deptStore)
        {
            Response response = new Response();
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("SNCon"));
            Dal dal = new Dal();
            response = dal.CreateStore(deptStore, connection);
            return response;
        }

        // get all dept store data
        [HttpGet]
        [Route("GetDeptStore")]
        public Response GetDeptStore()
        {
            Response response = new Response();
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("SNCon"));
            Dal dal = new Dal();
            response = dal.GetDeptStore( connection);
            return response;
        }
    }
}
