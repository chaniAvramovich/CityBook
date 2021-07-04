using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using react_dotnet_example.BL;
using react_dotnet_example.Models;

namespace react_dotnet_example.Controllers
{
    [ApiController]
    public class UsersController : ControllerBase
    {


        

        [HttpPost]
        [Route("api/user")]
        //[Consumes("application/json")]
        public ActionResult<UserModel> PostUser(UserModel item)
        {
            return UserBL.PostUser(item);
        }
        

    }
}
