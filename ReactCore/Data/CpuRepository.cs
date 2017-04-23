using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using ReactCore.Interfaces;
using ReactCore.Model;

namespace ReactCore.Data
{
    public class CpuRepository : ICpuRepository
    {
        private readonly DbContext _context = null;

        public CpuRepository(IOptions<Settings> settings)
        {
            _context = new DbContext(settings);
        }

        public async Task<IEnumerable<Cpu>> GetAllCpus()
        {
            try
            {
                return await _context.Notes.Find(_ => true).ToListAsync();
            }
            catch (Exception ex)
            {
                // log or manage the exception
                throw ex;
            }
        }

        public async Task<Cpu> GetCpu(string id)
        {
            var filter = Builders<Cpu>.Filter.Eq("Id", id);

            try
            {
                return await _context.Notes
                                .Find(filter)
                                .FirstOrDefaultAsync();
            }
            catch (Exception ex)
            {
                // log or manage the exception
                throw ex;
            }
        }



}
}
