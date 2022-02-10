import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogsConfigService {
  constructor() {}
  public SubmitButton(text = 'Save') {
      return {
          submit: {
              text: text
          }
      };
  }

  public DismissButton(text = 'Dismiss') {
      return {
          dismiss: {
              text: text
          }
      };
  }

  public CustomButton(text = 'My button') {
      return {
          custom: {
              text: text,
              customCallback: () => void 0
          }
      };
  }

  public SubmitDismissButtons(submitText?, dismissText?) {
      return {
          ...this.SubmitButton(submitText),
          ...this.DismissButton(dismissText)
      };
  }

  public SubmitDismissCutomButtons(submitText?: string, dismissText?: string, customText?: string) {
      return {
          ...this.SubmitButton(submitText),
          ...this.DismissButton(dismissText),
          ...this.CustomButton(customText),
      };
  }
}
