using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

namespace react_dotnet_example.Models
{
    public class UserDalByJson
    {
        const string path = "./jsonFile.json";
        public static UserModel PostUser(UserModel item)
        {
            if (item != null)
            {
                try
                {
                    string jsonString = JsonSerializer.Serialize(item);
                    File.WriteAllText(path, jsonString);
                }
                catch (Exception e)
                {

                   throw new Exception(e.Message); 
                }
              
       
            }
            return item;
        }
    }
}