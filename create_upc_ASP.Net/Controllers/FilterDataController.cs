using createupcs.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Xml.Linq;

namespace createupcs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilterDataController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public FilterDataController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        // CREATE FILTER DATA
        [HttpPost]
        [Route("CreateFilter")]
        public Response CreateFilter( FilterData filterData)
        {
            Response response = new Response();
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("SNCon"));
            Dal dal = new Dal();
            response = dal.CreateFilter(filterData, connection);
            return response;
        }

        // GET DATA BY PRODUCT NAME;
        [HttpGet]
        [Route("GetByName")]
        public Response GetByName(string name)
        {
            Response response = new Response();
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("SNCon"));
            Dal dal = new Dal();
            response = dal.GetByName(name ,connection);
            return response;    

        }

        // GET DATA BY PRODUCT upcs;
        [HttpGet]
        [Route("GetByUpcs")]
        public Response GetByUpcs(string memberNumber)
        {
            Response response = new Response();
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("SNCon"));
            Dal dal = new Dal();
            response = dal.GetByUpcs(memberNumber, connection);
            return response;

        }

        // GET DATA BY PRODUCT store;
        [HttpGet]
        [Route("GetByStore")]
        public Response GetStore(string store)
        {
            Response response = new Response();
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("SNCon"));
            Dal dal = new Dal();
            response = dal.GetByStore(store, connection);
            return response;

        }

        // get filter data:
        [HttpGet]
        [Route("GetsearchData")]
        public Response GetsearchData()
        {
            Response response = new Response();
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("SNCon"));
            Dal dal = new Dal();
            response = dal.GetsearchData(connection);
            return response;
        }


       
    }
}
