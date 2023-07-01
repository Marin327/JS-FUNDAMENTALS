public class Program
{
    public static void Main()
    {
            var firstString = Console.ReadLine().Split(" | ");
            var listDictionary = new SortedDictionary<string, List<string>>();
            foreach (var item in firstString)
            {
                var wordDefinition = item.Split(": ");
                if (!listDictionary.ContainsKey(wordDefinition[0]))
                {
                    listDictionary.Add(wordDefinition[0], new List<string>(){$" -{wordDefinition[1]}"});
                }
                else
                {
                    listDictionary[wordDefinition[0]].Add($" -{wordDefinition[1]}");
                }
            }
            var secondCheckWordString = Console.ReadLine().Split(" | ");
            foreach (var word in secondCheckWordString)
            {
                if (listDictionary.ContainsKey(word))
                {
                    foreach (var item in listDictionary.Where(x => x.Key == word))//Така се посочва да използваме само една(word) от 
                                                                                  //всички ключови думи в речника,
                    {                                                             //защото иначе ще имаме няколко повтарящи се изхода!
                        Console.WriteLine(item.Key);
                        Console.WriteLine(string.Join("\n", item.Value.OrderByDescending(x => x.Length))); //Моят начин!
                      //foreach (var definition in item.Value.OrderByDescending(x => x.Length))//Друг начин.
                      //{
                         //Console.WriteLine(definition);
                      //}
                    }
                }
            }
            var thirdString = Console.ReadLine();
            if (thirdString == "List")
            {
                Console.WriteLine(string.Join(" ", listDictionary.Select(x => x.Key)));//Друг начин.
                //var counter = 0;                              //Избери(Select) само ключа(думата) от речника(listDictionary)! 
                //foreach (var item in listDictionary)
                //{
                //    counter++;
                //    if (listDictionary.Count != counter)
                //    {                                         //Моят начин.
                //        Console.Write($"{item.Key} ");
                //    }
                //    else
                //    {
                //        Console.WriteLine($"{item.Key}");
                //    }
                //}
            } 
    }
}