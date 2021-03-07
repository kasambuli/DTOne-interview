### Assumptions
1. The prices array should not be empty
2. Throw an error when the prices array is empty

### Pseudocode
1. Get the range of K, Where K is the number of transactions we are exepected to make to get the highest profit e.g range of 2 will be 0,1,2 and store them in rangeOfK array
2. Remove the first item of the rangeOfK array which is zero because we can't have 0 transactions
3. Loop through the prices array and append 0s inplace of the expected profits at each item to the evenProfits and oddProfits array
4. Loop through the rangeOfK to calculate the profit per transaction
5. Check whether we are at an odd number transaction(e.g 1) and assign values for current profit to oddProfits and vice versa
6. Loop through the prices array and calculate the current profit.
7. Return the last item of the evenProfits array if the number of transactions are even and odd if not.