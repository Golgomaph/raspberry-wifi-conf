exec("sudo reboot", function(error, stdout, stderr) {
   if (!error) console.log("... restarting OS!");
   else console.log("... restarting OS failed! - " + stdout);
   });
},
