using react_dotnet_example.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace react_dotnet_example.BL
{
    public class UserBL
    {
        public static UserModel PostUser(UserModel item)
        {
            
            return UserDalByJson.PostUser(item);
        }
    }
}
