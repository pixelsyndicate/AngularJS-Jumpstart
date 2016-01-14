using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularWithWebApi.Controllers.api
{
    public class Customer
    {
        public int id { get; set; }
        public string joined { get; set; }
        public string name { get; set; }
        public string city { get; set; }
        public double orderTotal { get; set; }
        public IEnumerable<Order> orders { get; set; }

    }
    public class Order
    {
        public int id { get; set; }
        public string product { get; set; }
        public double total { get; set; }
    }

    public static class CustomerOrderDataFactory
    {
        public static List<Customer> GetData()
        {
            return new List<Customer>() {
                new Customer {
                id = 1,
                joined = "2000-12-02",
                name = "John",
                city = "Chandler",
                orderTotal = 9.9956,
                orders = new List<Order> {
                    new Order {
                    id = 1,
                    product = "Shoes",
                    total = 9.9956
                    }
}                 },
            new Customer {
                id = 2,
                joined = "1965-01-25",
                name = "Zed",
                city = "Las Vegas",
                orderTotal = 19.99,
                orders =   new List<Order> {new Order
                    {
                    id = 2,
                        product = "Baseball",
                        total = 9.995
                    },
                    new Order{
                    id = 3,
                        product = "Bat",
                        total = 9.995
                    }
                }
            },
            new Customer {
                id = 3,
                joined = "1944-06-15",
                name = "Tina",
                city = "New York",
                orderTotal = 44.99,
                orders =   new List<Order> {new Order
                    {
                    id = 4,
                        product = "Headphones",
                        total = 44.99
                    }
                }
            },
            new Customer {
                id = 4,
                joined = "1995-03-28",
                name = "Dave",
                city = "Seattle",
                orderTotal = 101.50,
                orders = new List<Order> {
                    new Order {
                    id = 5,
                        product = "Kindle",
                        total = 101.50
                    }
                }
            }
        };
        }

    }

    public class CustomersController : ApiController
    {
        // GET: api/Customers
        public IEnumerable<Customer> Get()
        {
            var foundCustomers = CustomerOrderDataFactory.GetData();
            return foundCustomers;
            //return new string[] { "value1", "value2" };
        }

        // GET: api/Customers/5
        public Customer Get(int id)
        {
            var data = CustomerOrderDataFactory.GetData();
            return data.FirstOrDefault(x => x.id == id);
        }

        // POST: api/Customers
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Customers/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Customers/5
        public void Delete(int id)
        {
            var data = CustomerOrderDataFactory.GetData();
            var toDelete = data.Find(x => x.id == id);
            var result = data.Remove(toDelete);

        }


    }

    public class OrdersController : ApiController
    {
        // GET: api/Customers
        public IEnumerable<Order> Get()
        {
            var data = CustomerOrderDataFactory.GetData();
            List<Order> ordersToReturn = new List<Order>();
            foreach (var c in data)
            {
                foreach (var o in c.orders)
                {
                    ordersToReturn.Add(o);
                }
            }
            return ordersToReturn;
        }

        // GET: api/Customers/5
        public Order Get(int id)
        {
            //  var data = fakeData;
            // return data.Where(x => x.orders.Select(y => y.id == id));
            return new Order();
        }



        // POST: api/Customers
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Customers/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Customers/5
        public void Delete(int id)
        {
            //var data = fakeData;
            //var toDelete = fakeData.Find(x => x.id == id);
            //var result = data.Remove(toDelete);

        }


    }
}
