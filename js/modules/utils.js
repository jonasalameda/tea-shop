/**
 * This function is used to show a Bootstrap alert message on a webpage.
 *
 * It can be used to display success, error, warning, or info messages. For example,
 * it can be used to inform the user that an item has been added to their shopping cart, or an item has been removed from the cart.
 * 
 * @param {*} message  the message to be displayed in the alert
 * @param {*} type the type of alert (success, error, warning, info)
 * @param {*} placeholderId the ID of the placeholder element where the alert will be displayed
 */
export function showAlertMessage(message, type, placeholderId) {
  const alertContainer = document.getElementById(placeholderId);
  const alert = document.createElement("div");
  alert.className = `alert alert-${type} alert-dismissible fade show`;
  alert.role = "alert";
  alert.innerHTML = `
    <strong>${message}</strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;
  alertContainer.appendChild(alert);
  // Remove the alert after 4 seconds
  setTimeout(() => {
    alert.remove();
  }, 4000);
}
