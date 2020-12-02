import {
  Application,
  Router,
  RouterContext,
  send,
} from "https://deno.land/x/oak@v6.2.0/mod.ts";
import artemisQuery from "./functions/artemis.ts";
import syncCacheAndState from "./functions/sync.ts";
import addDataSnapshot from "./functions/snapshot.ts";
import clearSnapshots from "./functions/clear.ts";
import { createSecAccept } from "https://deno.land/std@0.69.0/ws/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";


import {applyArtemis} from "./applyArtemis.ts"


const app = new Application();

const router = new Router();
app.use(oakCors())


// // const url = "https://api.spacex.land/graphql"
// // const query = ` query {
// //   launch(id: "1") {
// //     mission_name
// //     launch_success
// //     launch_year
// //     }
// //   }`
// //   const query = `
// //   query {
// //     Lift(id: "panorama") {
// //       name
// //       status
// //     }
// //   }
// // `;
// // const url = "https://snowtooth.moonhighway.com/";
// // artemisQuery(url, query, ctx.state)
// // });

// // router.use("/", async (ctx, next) => {
// //   console.log('in router')

// //     const url = "https://api.spacex.land/graphql"
// //       const query = ` query {
// //         launch(id: "1") {
// //           mission_name
// //           launch_success
// //           upcoming
// //           launch_year
// //           }
// //         }`

// //     artemisQuery(url, query, ctx.state)
// //   })
// //   app.use(router.routes(), router.allowedMethods())

// // router.get("/gui", async (ctx) => {
// //   // ctx.response.redirect('/index.html')
// //   console.log(Deno.cwd())
// //   await ctx.send({
// //         root: `${Deno.cwd()}`,
// //         index: "index.html",
// //       });
// // })

// router.get("/artemis", (ctx) => {
  // ctx.response.body = "Query has been sent";
  // console.log("you have entered the router");
  // let counter = 3;
  // while (counter > 0) {
  //   const url = "https://api.spacex.land/graphql";
  //   let id = 10;
  //   const query = ` query {
  //     launch(id: "${id}") {
  //       mission_name
  //       launch_success
  //       upcoming
  //       launch_year
  //       }
  //     }`;
  //   counter--;
  //   id++;

//     artemisQuery(url, query, ctx.state);
//     ctx.response.body = ctx.state
//   }
// });

// router.get("/getData", (ctx, state:any) => {
//   console.log("in getData route")
//   console.log("state", state.artemis)
//   ctx.response.body = state.artemis
// })

// app.use(router.routes(), router.allowedMethods());

// app.use(
//   oakCors({
//     origin:  "http://localhost:8080",
//     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }),
// );

const ArtemisService = await applyArtemis <Router>({
  Router,
  useGui: true
})
app.use(ArtemisService.routes());
console.log('testing artemis route server')

// app.use(async (ctx, next) => {
//   // console.log(Deno.cwd());
//   await ctx.send({
//     root: `${Deno.cwd()}/dist`,
//     // index: "index.html",
//   });
//   next()
// });



const port = 4015;
console.log(`Server started on port ${port}`);
await app.listen({ port });

