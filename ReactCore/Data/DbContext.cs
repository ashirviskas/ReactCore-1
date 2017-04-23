using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using ReactCore.Model;

namespace ReactCore.Data
{
    public class DbContext
    {
        private readonly IMongoDatabase _database;

        public DbContext(IOptions<Settings> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);
            _database = client.GetDatabase(settings.Value.Database);
        }

        public IMongoCollection<Cpu> Notes => _database.GetCollection<Cpu>("cpu");
    }
}
