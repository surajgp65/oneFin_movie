export class GlobalConstant {
  static PATTERNS = {
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    alphabets: /[A-z]/,
    alphaNumeric: /[A-z0-9]/,
    number: /^[0-9]*$/,
    cardNumber: /([0-9]{4}-){3}[0-9]{3,4}/,
    cardExpiry: /^(0[1-9]|1[0-2])\/[2-9][0-9]$/,
    cardCvv: /^[0-9]{3,4}$/,
    amountWithoutDecimals: /^[0-9$]*$/,
    vehicleNumber: /^[A-Z0-9]{1,8}$/,
  };
}

// Set slider width
export enum SLIDERWIDTH {
  OPEN = '60%',
  CLOSE = '0',
  ADDNEW = 'calc(100vw - 26rem)',
  EDITNEW = 'calc(100vw - 45rem)',
  ADMINSETTING = 'calc(100vw - 35rem)',
  TEMPLATE = 'calc(100vw - 28rem)',
  PROJECTTASK = 'calc(100vw - 43rem)',
}

// Set slider height
export enum SLIDERHEIGHT {
  OPEN = '60%',
  CLOSE = '0',
  ADDNEW = 'calc(100vh - 6.9rem)',
  EDITNEW = 'calc(100vwh- 7.5rem)',
  ADMINSETTING = 'calc(100vh - 7rem)',
  TEMPLATE = 'calc(100vh - 4rem)',
  PROJECTTASK = 'calc(100vh - 10rem)',
  MYTASK = 'calc(100vh - 9.4rem)',
  ADDTASK = 'calc(100vh - 5.8rem)',
}

// Constant pattern
export class CONSTANTS {
  static PATTERNS = {
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    alphabets: /[A-z]/,
    alphaNumeric: /[A-z0-9]/,
    number: /^[0-9]*$/,
    cardNumber: /([0-9]{4}-){3}[0-9]{3,4}/,
    cardExpiry: /^(0[1-9]|1[0-2])\/[2-9][0-9]$/,
    cardCvv: /^[0-9]{3,4}$/,
    amountWithoutDecimals: /^[0-9$]*$/,
    vehicleNumber: /^[A-Z0-9]{1,8}$/,
  };

  static todayDate() {
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    let d = new Date();
    let year = d.getFullYear();
    let months = monthNames[d.getMonth()];
    let day = d.getDate();
    let date = day + ' ' + months + ' ' + year;
    localStorage.setItem('today', date);
    return date;
  }

  public static TECHNICAL_ERROR = 'Error Occurred. Please Contact Helpdesk.';
  public static API_SUCCESS = 'success';
  public static API_ERROR = 'error';
}
