using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ReactCore.Model
{
    public class Cpu
    {
        [BsonId]
        public ObjectId Id { get; set; }

        [BsonElement("url")]
        public string Url { get; set; } = string.Empty;

        [BsonElement("Procesoriaus branduolių skaičius")]
        public int CoresCount { get; set; } = 0;

        [BsonElement("price")]
        public double Price { get; set; } 

        [BsonElement("Procesoriaus lizdo tipas")]
        public string SocketType { get; set; }

        [BsonElement("model")]
        public string Model { get; set; }

        [BsonElement("Procesoriaus tipas")]
        public string Type { get; set; }

        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("Maksimalus TDP")]
        public int Tdp { get; set; }

        [BsonElement("Pridėtas ventiliatorius")]
        public bool HasCooler { get; set; }

        [BsonElement("Procesoriaus  taktavimo dažnis")]
        public double GhSpeed { get; set; }

        [BsonElement("contents")]
        public int Contents { get; set; }

        [BsonElement("Integruota grafinė sistema")]
        public bool IntegratedGpu { get; set; } 
    }
}
