/* @odoo-module */

import { ConfirmationDialog } from "@web/core/confirmation_dialog/confirmation_dialog";
import publicWidget from "@web/legacy/js/public/public_widget";

publicWidget.registry.HelloWorldPopup = publicWidget.Widget.extend({
  selector: "#wrapwrap",

  init() {
    this._super(...arguments);
    this.dialog = this.bindService("dialog");
  },
  start() {
    // this.dialog.add(ConfirmationDialog, {
    //   body: "Hello World",
    //   confirm: () => {
    //     console.log("Confirmation dialog confirmed");
    //   },
    //   cancel: () => {
    //     console.log("Confirmation dialog cancelled");
    //   },
    // });

    // Add event listener for city filter

    const toggleInfoButton = document.getElementById("toggle-info-button");
    const ownerInfo = document.getElementById("owner-info");
    const btn_xemthem = document.getElementById("btn_xemthem");
    const xemthemInfo = document.getElementById("xemthem-info");
    if (toggleInfoButton) {
        toggleInfoButton.addEventListener("click", function () {
        //    $("#owner-info").slideToggle("slow");

            
            // Toggle class 'invisible' trên ownerInfo
            ownerInfo.classList.toggle("invisible_1")
            
            // Thay đổi nội dung của nút dựa trên trạng thái hiển thị
            if (ownerInfo.classList.contains("invisible_1")) {
                toggleInfoButton.textContent = "Ẩn thông tin chủ nhà ";
                
            } else {
                toggleInfoButton.textContent = "Hiển thị thông tin chủ nhà";
                
            }
        });
    }
   


    if (btn_xemthem) {
      btn_xemthem.addEventListener("click", function () {
      //    $("#owner-info").slideToggle("slow");

          
          // Toggle class 'invisible' trên ownerInfo
          xemthemInfo.classList.toggle("invisible_xemthem")
          
          // Thay đổi nội dung của nút dựa trên trạng thái hiển thị
          if (xemthemInfo.classList.contains("invisible_xemthem")) {
            btn_xemthem.textContent = "Thu gọn ";
              
          } else {
            btn_xemthem.textContent = "Xem thêm";
              
          }
      });
  }

    return this._super(...arguments);
  },
});
