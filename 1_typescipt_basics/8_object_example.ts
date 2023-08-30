/* Örnek: Daha önceden yaptıgımız hhizmet bulma projesinde ki
request ve response datalarının type'larını yazalım */

type LoginRequestType_1 = {
  email: string;
  password: string;
};

type ApiLoginResultType_2 = {
  data: {
    token: string;
    userData: {
      id: number;
      role_id: number | null;
      lang_code: string;
      firstname: string;
      lastname: string;
      email: string;
      facebook_id: string | null;
      google_id: string | null;
      status: "active" | "passive";
      created_at: string;
      updated_at: string;
      fullname: string;
      profile: {
        id: number;
        user_id: number;
        avatar: null | string;
        email_verified_at: null | string;
        phone: null;
        phone_verified_at: null | string;
        birthday: null | string;
        gender: "prefer_not_to_say" | "male" | "female";
        address: null | string;
        company_description: null | string;
        lat: null | number;
        lng: null | number;
        zip: null | number;
        portfolio_images: null | string;
        intervention_distance: number;
        email_notification: string;
        sms_notification: "no" | "yes";
        created_at: string;
        updated_at: string;
      };
    };
  };
  status: "succes" | "error";
};

type ApiLoginErrorType_1 = {
  status: "error";
  errorMessage: string;
  exceptionType?: string;
};
