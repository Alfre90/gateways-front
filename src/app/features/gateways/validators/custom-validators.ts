import { AbstractControl, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static validateIpV4 = (): ValidatorFn => {
    let subscribe = false;
    return (
      ipv4Control: AbstractControl
    ): { [key: string]: boolean } | null => {
      if (!subscribe) {
        subscribe = true;
      }
      if (ipv4Control.value !== '') {
        try {
          const ipv4 = ipv4Control.value;
          if (
            ipv4.split('.').length === 4 &&
            ipv4
              .split('.')
              .filter((ip: any) => ip.length <= 3 && +ip <= 255 && +ip >= 1)
              .length === 4
          ) {
            return null;
          }
        } catch (e) {
          return {
            validIpv4: true
          };
        }
        return {
          validIpv4: true
        };
      } else {
        return null;
      }
    };
    // let subscribe = false;
    // return (ipv4Control: AbstractControl): { [key: string]: boolean } => {
    //   if (!subscribe) {
    //     subscribe = true;
    //   }
    //   if (ipv4Control.value !== '') {
    //     try {
    //       const ipv4 = ipv4Control.value;
    //       if (
    //         ipv4.split('.').length === 4 &&
    //         ipv4
    //           .split('.')
    //           .filter((ip: any) => ip.length <= 3 && +ip <= 255 && +ip >= 1)
    //           .length === 4
    //       ) {
    //         return {
    //           validIpv4: false
    //         };
    //       } else {
    //         return {
    //           validIpv4: true
    //         };
    //       }
    //     } catch (e) {
    //       return {
    //         validIpv4: true
    //       };
    //     }
    //   } else {
    //     return {
    //       validIpv4: true
    //     };
    //   }
    // };
  };
}
