using System;
using System.ComponentModel.DataAnnotations;

namespace react_dotnet_example.Models
{
    public class UserModel
    {

        [Required]
        //[Display(Name = "firstName")]
        public string FirstName { get; set; }

        [Required]
        //[Display(Name = "lastName")]
        public string LastName { get; set; }

        [Required]
        //[Display(Name = "identity")]
        public int Identity { get; set; }

        [Required]
        //[Display(Name = "dateOfBirth")]
        public DateTime DateOfBirth { get; set; }

        [Required]
        //[Display(Name = "kind")]
        public string Kind { get; set; }


        [Required]
        //[Display(Name = "HMO")]
        public string HMO { get; set; }



        //[Display(Name = "childrens")]
        public Child[] Childrens { get; set; }

    }
    public class Child
    {
        [Required]
        //[Display(Name = "firstName")]
        public string FirstName { get; set; }
        [Required]
        //[Display(Name = "identity")]
        public string Identity { get; set; }
        [Required]
        //[Display(Name = "dateOfBirth")]
        public DateTime DateOfBirth { get; set; }
    }

}