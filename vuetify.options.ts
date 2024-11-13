// vuetify.options.ts

export const primaryTheme = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    base: "#FFFFFF",
    primary: "#1867C0",
    secondary: "#FAFAFA",
    accent: "#7f867e",
    main: "#FAFAFA",
    navigationDrawer: "#042134",
    number: "#848d97",
  },
};

export const vuetifyDefaults = {
  VTextField: {
    variant: "outlined",
    density: "default",
    hint: "This field is required",
    persistentHint: true,
  },
  VBtn: {
    class: "text-capitalize",
  },
  VSelect: {
    density: "default",
    variant: "outlined",
    hint: "This field is required",
    persistentHint: true,
  },
  VTextarea: {
    variant: "outlined",
    hint: "This field is required",
    persistentHint: true,
  },
  VAutocomplete: {
    density: "default",
    variant: "outlined",
    hint: "This field is required",
    persistentHint: true,
  },
  VCombobox: {
    density: "default",
    variant: "outlined",
    hint: "This field is required",
    persistentHint: true,
  },
  VTimePicker: {
    density: "default",
    variant: "outlined",
    hint: "This field is required",
  },
  VFileInput: {
    density: "default",
    variant: "outlined",
    hint: "This field is required",
    persistentHint: true,
  },
};
