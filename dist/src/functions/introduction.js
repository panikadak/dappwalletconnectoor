"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const picocolors_1 = require("picocolors");
const log_1 = require("./log");
const steps_1 = require("../constants/steps");
const introduction = () => {
    (0, log_1.log)((0, picocolors_1.blue)(`
                              █
                             ███
                           ▄██████
                          █████████
                         ███████████▄
                       ▄██████████████
                      █████████████████
                     ███████████████████▄
                    ██████████████████████
                  █████████████████████████
                 ███████████████████████████▄
                ██████████████████████████████
              █████████████████████████████████
             ███████████████████████████████████
            █████████████████████████████████████▄
               ███████████████████████████████▀
                  ▀████████████████████████
                      █████████████████
              ███▄        █████████▀       ▄██▀
                ████▄        ▀██       ▄█████
                 ███████           ▄▄██████
                   █████████▄   ▄█████████
                    ▀███████████████████
                      █████████████████
                       ▐█████████████
                         ██████████▀
                           ███████
                            ████▀
                              █



              /////////////////                     
          /////////////////////////                 
        /////////           /////////               
         .///                   ///                 
  */                  /                  /*         
//////.            ///////             //////       
 ////////        ///////////        ////////        
   ////////.  /////////////////   ////////          
      //////////////     //////////////             
        /////////,         ./////////               
           ////               ////                  
`));
    (0, log_1.log)("\n");
    (0, log_1.log)(steps_1.WELCOME_TEXT);
};
exports.default = introduction;
//# sourceMappingURL=introduction.js.map