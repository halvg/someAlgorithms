import java.util.ArrayList;

import java.util.Arrays;

import java.util.Collections;

import java.util.HashSet;

import java.util.List;

import java.util.Set;

 

/**

*

 *     Return all possible combination of coins that add up a given amount.

*     It's considered there are an infinite amount of each coin.

*

*  Implemented without memoization.

*/

public class Main5 {

 

   

    public static void main(String[] args) {

        ArrayList<Integer> coins = new ArrayList<>(Arrays.asList(1, 2, 5, 20, 50));

       

        Set<List<Integer>> result = coinsProblem(coins, 100);

        System.out.println(result);

    }

   

    

    public static Set<List<Integer>> coinsProblem(List<Integer> coins, Integer amount) {

        Set<List<Integer>> result = new HashSet<List<Integer>>();

      

       for (Integer coin : coins) {

          if (amount-coin == 0) {

              List<Integer> l = new ArrayList<Integer>(Arrays.asList(coin));

              result.add(l);

          } else if (amount - coin > 0) {

              Set<List<Integer>> listas = coinsProblem(coins, amount-coin);

              for (List<Integer> list : listas) {

                  list.add(coin);

                  Collections.sort(list); // sort, so the lists with the same

                                          // values can be considered equals and so not added to the result set.

                  result.add(list);

              }

          }

       }

       

        return result;

    }

   

} 
