using createupcs.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace createupcs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UpcController : ControllerBase
    {


        private readonly IConfiguration _configuration;
        public UpcController(IConfiguration configuration) { 
            _configuration = configuration;
        }

        // get coupon:
        [HttpGet]
        [Route("GetCoupon")]

        public Response GetCoupon()
        {
            Response response = new Response();
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("SNCon").ToString());
            Dal dal = new Dal();
            response = dal.GetCoupon(connection);
            return response;

        }

        // create coupon
        [HttpPost]
        [Route("CreateCoupon")]
        public Response CreateCoupon( Upc coupon)
        {
            Response response = new Response();
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("SNCon").ToString());
            Dal dal = new Dal();
            response = dal.CreateCoupon(coupon, connection);
            return response;
        }

        // delete coupons:
        [HttpDelete]
        [Route("{id}")]
        public Response DeleteCoupon(int id)
        {
            Response response = new Response();
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("SNCon").ToString());
            Dal dal = new Dal();
            response = dal.DeleteCoupon(id, connection);
            return response;

        }
    }
}
