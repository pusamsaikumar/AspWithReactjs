using System.ComponentModel.DataAnnotations;

namespace createupcs.Models
{
    public class Upc
    {
        public int Id { get; set; }
        [Required]
        public string? Title { get; set; }
        [Required]
        public string? Details { get; set; }
  
        public string? OtherDetails { get; set; }
        [Required]
        public int? MinPurchaseAmount { get; set; }
        [Required]
        public int? CustomerSavings { get; set; }
        public int PerSavings { get; set; }
        public int DealOfWeek { get; set; }
        public int Recurring { get; set; }
        public string RecuringFrom { get; set; }
        public int CouponLimit { get; set; }
        [Required]
        public DateTime? OfferValidFrom { get; set; }
        [Required]
        public DateTime? OfferTo { get; set; }

        public string Image { get; set; }

        public string Upcs { get; set; }
       
        [Required]
        public string? Groups { get; set; }

        public int GroupAll { get; set; }
        public int GroupInclude { get; set; }
        public int GroupExclude { get; set; }
        [Required]
        public string? Stores { get; set; }
        public int StoresAll { get; set; }
        public int StoresInclude { get; set; }
        public int StoresExclude { get; set; }

    }
}
