# Redux Pattern (component -> Actions -> Reducers -> Store -> Component)
![Redux Pattern](https://github.com/piyalidas10/Redux-Angular/blob/0d23471f6371ebad049846d571a42a5413d3cd50/redux_pattern.png)
1. Component dispatch the action. Action is nothing than an object with type & payload.
2. Action will reach to reducer. Reducer is a pure function that not dependent on external variable. It makes sure that updates of States will be predictable. Reducer will check action type & payload. 
3. Reducer will return data to the store / state which is new state.
4. Component directly consume data from store

Stackbliz Link: https://stackblitz.com/~/github.com/piyalidas10/Redux-Angular

### Angular 18 state management using NGRX - Store, Reducer, Effects, Selectors | NgRx tutorial in Hindi
https://www.youtube.com/watch?v=PvL7TULFxoE
