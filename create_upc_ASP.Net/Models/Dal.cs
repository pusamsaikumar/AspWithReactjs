using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;

namespace createupcs.Models
{
    public class Dal
    {

        // create coupon
        public Response CreateCoupon(Upc coupon, SqlConnection connection)
        {
            Response response = new Response();
            SqlCommand cmd = new SqlCommand("insert into UPC(Title,Details, OtherDetails, MinPurchaseAmount, CustomerSavings, PerSavings,DealOfWeek, Recurring, RecuringFrom, OfferValidFrom, OfferTo, Image,  Upcs, Groups, GroupAll, GroupInclude , GroupExclude, Stores, StoresAll,StoresInclude,StoresExclude,CouponLimit) values('" + coupon.Title + "','" + coupon.Details + "','" + coupon.OtherDetails + "','" + coupon.MinPurchaseAmount + "','" + coupon.CustomerSavings + "','" + coupon.PerSavings + "','" + coupon.DealOfWeek + "','" + coupon.Recurring + "','" + coupon.RecuringFrom + "','" + coupon.OfferValidFrom + "','" + coupon.OfferTo + "','" + coupon.Image + "','" + coupon.Upcs + "','" + coupon.Groups + "','" + coupon.GroupAll + "','" + coupon.GroupInclude + "','" + coupon.GroupExclude + "','" + coupon.Stores + "','" + coupon.StoresAll + "','" + coupon.StoresInclude + "','" + coupon.StoresExclude + "','"+coupon.CouponLimit+"')",connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();
            if (i > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "Coupon Created Successfully";
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "Coupon Creation Failed";
            }

            return response;

        }

        // get coupons

        public Response GetCoupon(SqlConnection connection)
        {
            Response response = new Response();

            List<Upc> coupons = null;
            connection.Open();
            using SqlCommand cmd = new SqlCommand("select * from UPC", connection);
            using SqlDataReader reader = cmd.ExecuteReader();
            if (reader.Read())
            {
                coupons = new List<Upc>();
                while (reader.Read())
                {
                    var coupon = new Upc();
                    coupon.Id = reader.GetInt32(0);
                    coupon.Title = reader.GetString(1);
                    coupon.Details = reader.GetString(2);
                    coupon.OtherDetails = reader.GetString(3);
                    coupon.MinPurchaseAmount = reader.GetInt32(4);
                    coupon.CustomerSavings = reader.GetInt32(5);
                    coupon.PerSavings = reader.GetInt32(6);
                    coupon.DealOfWeek = reader.GetInt32(7);
                    coupon.Recurring = reader.GetInt32(8);
                    coupon.RecuringFrom = reader.GetString(9);
                    coupon.CouponLimit = reader.GetInt32(10);
                    coupon.OfferValidFrom = reader.GetDateTime(11);
                    coupon.OfferTo = reader.GetDateTime(12);
                    coupon.Image = reader.GetString(13);
                   coupon.Upcs = reader.GetString(14);
                    coupon.Groups = reader.GetString(15);
                    coupon.GroupAll = reader.GetInt32(16);
                    coupon.GroupInclude = reader.GetInt32(17);
                    coupon.GroupExclude = reader.GetInt32(18);
                    coupon.Stores = reader.GetString(19);
                    coupon.StoresAll = reader.GetInt32(20);
                    coupon.StoresInclude = reader.GetInt32(21);
                    coupon.StoresExclude = reader.GetInt32(22);


                    coupons.Add(coupon);
                }

            }
            reader.Close();
            connection.Close();
            if (coupons != null)
            {
                response.StatusCode = 200;
                response.StatusMessage = "Coupon data found";
                response.Upcs = coupons;
            }
            return response;
        }


        // delete coupon:
        public Response DeleteCoupon(int id, SqlConnection connection)
        {
            Response response = new Response();
            SqlCommand cmd = new SqlCommand("DELETE FROM UPC WHERE Id = '" + id + "'", connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();
            if (i > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "Coupon deleted succcessfully";
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "failed";
            }
            return response;
        }

        // create FilterData
       
       public Response CreateFilter(FilterData filterData, SqlConnection connection )
        {
            Response response = new Response();
            SqlCommand cmd = new SqlCommand(" insert into SearchData(UserName,FirstName,LastName,MemberNumber,PreferredStore,ProductName) values('"+filterData.UserName+"','"+filterData.FirstName+"','"+filterData.LastName+"','"+filterData.MemberNumber+"','"+filterData.PreferredStore+"','"+filterData.ProductName+"')", connection);
            connection.Open( );
            int i = cmd.ExecuteNonQuery();  
            connection.Close();
            if (i > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "Created Filter Data Successfully";
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "Failed Creation of filter data ";
            }
            return response;
        }

        // get by product name:
        public Response GetByName(string name , SqlConnection connection)
        {
            Response response= new Response();
            SqlCommand cmd = new SqlCommand("select * from SearchData", connection);
            DataTable dt = new DataTable();
           SqlDataAdapter adapter = new SqlDataAdapter(cmd);
            adapter.Fill(dt);
            List<FilterData> filterDataList = new List<FilterData>();
            for(int i = 0; i < dt.Rows.Count; i++)

            {
                FilterData filterData = new FilterData();
                filterData.UserID = Convert.ToInt32(dt.Rows[i]["UserID"]);
                filterData.UserName = dt.Rows[i]["UserName"].ToString();
                filterData.FirstName = dt.Rows[i]["FirstName"].ToString();
                filterData.LastName = dt.Rows[i]["LastName"].ToString();
                filterData.MemberNumber = dt.Rows[i]["MemberNumber"].ToString();
                filterData.PreferredStore = dt.Rows[i]["PreferredStore"].ToString();
                filterData.ProductName = dt.Rows[i]["ProductName"].ToString();
                filterDataList.Add(filterData);

              
            }
            if (string.IsNullOrEmpty(name))
            {
                response.Filters = filterDataList.ToList();
            }
             else
             {
            response.Filters = filterDataList.Where((x) => x.ProductName.ToLower().Contains(name.ToLower())).ToList();

           }

           return response;

        }

        // get by product upcs
        public Response GetByUpcs(string memberNumber, SqlConnection connection)
        {
            Response response = new Response();
            SqlCommand cmd = new SqlCommand("select * from SearchData", connection);
            DataTable dt = new DataTable();
            SqlDataAdapter adapter = new SqlDataAdapter(cmd);
            adapter.Fill(dt);
            List<FilterData> filterDataList = new List<FilterData>();
            for (int i = 0; i < dt.Rows.Count; i++)

            {
                FilterData filterData = new FilterData();
                filterData.UserID = Convert.ToInt32(dt.Rows[i]["UserID"]);
                filterData.UserName = dt.Rows[i]["UserName"].ToString();
                filterData.FirstName = dt.Rows[i]["FirstName"].ToString();
                filterData.LastName = dt.Rows[i]["LastName"].ToString();
                filterData.MemberNumber = dt.Rows[i]["MemberNumber"].ToString();
                filterData.PreferredStore = dt.Rows[i]["PreferredStore"].ToString();
                filterData.ProductName = dt.Rows[i]["ProductName"].ToString();
                filterDataList.Add(filterData);



            }
            if (string.IsNullOrEmpty(memberNumber))
            {
                response.Filters = filterDataList.ToList();
            }
            else
            {
                response.Filters = filterDataList.Where((x) => x.MemberNumber.Contains(memberNumber)).ToList();

            }

            return response;

        }

        // get by product upcs
        public Response GetByStore(string store, SqlConnection connection)
        {
            Response response = new Response();
            SqlCommand cmd = new SqlCommand("select * from SearchData", connection);
            DataTable dt = new DataTable();
            SqlDataAdapter adapter = new SqlDataAdapter(cmd);
            adapter.Fill(dt);
            List<FilterData> filterDataList = new List<FilterData>();
            for (int i = 0; i < dt.Rows.Count; i++)

            {
                FilterData filterData = new FilterData();
                filterData.UserID = Convert.ToInt32(dt.Rows[i]["UserID"]);
                filterData.UserName = dt.Rows[i]["UserName"].ToString();
                filterData.FirstName = dt.Rows[i]["FirstName"].ToString();
                filterData.LastName = dt.Rows[i]["LastName"].ToString();
                filterData.MemberNumber = dt.Rows[i]["MemberNumber"].ToString();
                filterData.PreferredStore = dt.Rows[i]["PreferredStore"].ToString();
                filterData.ProductName = dt.Rows[i]["ProductName"].ToString();
                filterDataList.Add(filterData);



            }
            if (string.IsNullOrEmpty(store))
            {
                response.Filters = filterDataList.ToList();
            }
            else
            {
                response.Filters = filterDataList.Where((x) => x.PreferredStore.Contains(store)).ToList();

            }

            return response;

        }

        // Get Filter Data
        public Response GetsearchData (SqlConnection   connection) {

            Response response = new Response();
            SqlCommand cmd = new SqlCommand("select * from SearchData", connection);
            DataTable dt = new DataTable();
            SqlDataAdapter adapter = new SqlDataAdapter(cmd);
            adapter.Fill(dt);
            List<FilterData> filterDataList = new List<FilterData>();
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                FilterData filterData = new FilterData();
                filterData.UserID = Convert.ToInt32(dt.Rows[i]["UserID"]);
                filterData.UserName = dt.Rows[i]["UserName"].ToString();
                filterData.FirstName = dt.Rows[i]["FirstName"].ToString();
                filterData.LastName = dt.Rows[i]["LastName"].ToString();
                filterData.MemberNumber = dt.Rows[i]["MemberNumber"].ToString();
                filterData.PreferredStore = dt.Rows[i]["PreferredStore"].ToString();
                filterData.ProductName = dt.Rows[i]["ProductName"].ToString();
                filterDataList.Add(filterData);

            }
            if(filterDataList.Count > 0)
            {
                response.StatusCode=200;
                response.StatusMessage = "Get Filter data";
                response.Filters = filterDataList;
                   
            } 
           
            return response;
        }


        // CREATE DEPT STORE
        public Response CreateStore(DeptStore deptStore, SqlConnection connection)
        {
            Response response = new Response();
            DataTable dt = new DataTable();
            string query = "insert into DeptStore(StoreName) values('"+deptStore.StoreName+"')";
            SqlCommand cmd = new SqlCommand(query, connection);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();
            if (i > 0)
            {
                response.StatusCode=200;
                response.StatusMessage = "Create Department Store Successfully";
            }
            else
            {
                response.StatusCode=100;
                response.StatusMessage = "Failed";
            }

            return response;
        }

        // Get Dept store data
        public Response GetDeptStore(SqlConnection connection)
        {
           Response response= new Response();
            DataTable dt = new DataTable();
            SqlCommand cmd = new SqlCommand("select * from DeptStore", connection);
           
           // connection.Open();
            SqlDataAdapter adapter = new SqlDataAdapter(cmd);
            adapter.Fill(dt);
            List<DeptStore> DeptStoreList= new List<DeptStore>();   
           // connection.Close();
            for(int i=0; i<dt.Rows.Count;i++)
            {
                DeptStore deptStore1 = new DeptStore();
                deptStore1.StoreId = Convert.ToInt32(dt.Rows[i]["StoreId"]);
                deptStore1.StoreName = dt.Rows[i]["StoreName"].ToString();
                DeptStoreList.Add(deptStore1);
            }
             if(DeptStoreList.Count > 0)
            {
                response.StatusCode=200;
                response.StatusMessage = "Dept store data found";
                response.DeptStores = DeptStoreList;
            }
            else
            {
                response.StatusCode=100;
                response.StatusMessage = "No Dept store data found";
                response.DeptStores = null;
            }
            return response;
        }
    }
}
