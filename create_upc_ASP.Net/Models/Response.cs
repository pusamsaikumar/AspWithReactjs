namespace createupcs.Models
{
    public class Response
    {
        public int StatusCode { get; set; }
        public string StatusMessage { get; set; }
        public List<Upc> Upcs { get; set; }
        public List<FilterData> Filters { get; set; }   
        public List<DeptStore> DeptStores { get; set; }
       
    }
}
