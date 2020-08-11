
window.onload = function () {
  console.log("Amazon.js Loaded");
  // FOR FOCUSSING SEARCH BOX
  if (document.getElementById("myo-search-input")) {
    document.getElementById("myo-search-input").focus();
  }

  // FOR FOCUSSING OZ
  let ozField = document.querySelector('[data-test-id="shipping-weight-input-OZ"]');
  if (ozField) {
    ozField.focus();
    var event = jQuery.Event('keypress');
    event.which = -101;
    event.keyCode = -101; //keycode to trigger this for simulating enter
    jQuery(this).trigger(event);
  }

  // FOR URL+"BUY SHIPPING"
  const fUrl = "https://sellercentral.amazon.com/orders-v3/order";

  setInterval(function () {
    let url = document.URL.trim();
    let slash = url.lastIndexOf("/");
    let newUrl = url.slice(0, slash).trim();
    if (fUrl === newUrl) {
      window.location.href = url + "/buy-shipping";
      clearInterval(refreshIntervalId);
    }
  }, 1000);


  // FOR KEYPRESS AND CLICKING BUY SHIPPING
  let submitButton = document.querySelector('.a-button-input[value="Buy Shipping"]');
  
  function onKeyDown(e) {
    if (e.keyCode == 80) {
      console.log("P IS PRESSED")
      submitButton.click();
    }
  }
  window.addEventListener("keydown", onKeyDown, true);

  // ADDING F9 FEATURE
}
