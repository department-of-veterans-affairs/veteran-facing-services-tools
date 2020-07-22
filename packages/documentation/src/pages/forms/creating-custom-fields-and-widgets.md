---
title: Creating custom fields and widgets
---

# Creating custom fields and widgets

The API allows to specify your own custom `widget` and `field` components.

- A widget represents a HTML tag for the user to enter data, eg. `input`, `select`, etc.
- A field usually wraps one or more widgets and most often handles internal field state; think of a field as a form row, including the labels.

You can customize the base library to satisfy the unique requirements of your particular form.

- [How VA Forms Library interacts with RJSF](#how-va-forms-library-interacts-with-rjsf)
- [Supporting multi-page forms](#supporting-multi-page-forms)
- [Customizing fields and widgets from RJSF](#customizing-fields-and-widgets-from-rjsf)

## How VA Forms Library interacts with RJSF

The VA Forms Library code uses react-jsonschema-form (or RJSF), to render form fields, but it builds a scaffolding on top of it to support multi-page forms and common form patterns. Additionally, the VA Forms Library uses RJSF to create a form configuration spec that allows developers to specify the structure of a multi-page form.

RJSF passes all field and widget components to `SchemaField` (and most other components) as a `registry` property. To override fields and widgets in the registry, pass components of the same name into the library's main `Form` component. 

The VA Forms Library uses custom versions of these components:

- `ObjectField`
- `ArrayField`
- `FieldTemplate`
- [TextWidget](/available-widgets#textwidget)
- [SelectWidget](/available-widgets#selectwidget)
- [EmailWidget](/available-widgets#emailwidget)
- [CheckboxWidget](/available-widgets#checkboxwidget)
- [RadioWidget](/available-widgets#radiowidget)
- `TextareaWidget`

The VAFS uses these custom fields and widgets:

- [YesNoWidget](/available-widgets#yesnowidget)
- [DateWidget](/available-widgets#datewidget)
- [SSNWidget](/available-widgets#ssnwidget)
- [PhoneNumberWidget](/available-widgets#phonenumberwidget)

Writing custom widgets is similar to writing React components: A value is passed in, and an `onChange` hook is provided for changing data. Other properties like the schemas and field ID are also provided.

Custom fields receive all properties listed previously for field components in RJSF.

In addition to customizing fields and widgets, the VA Forms Library code hooks into a number of events provided by `Form` to support our form patterns, found in the `FormPage` component. These events are:

- `validate`: This event is called when validation occurs. We call our custom validation, which reads uiSchema for custom validation hooks that have been included for form fields outside of what JSON Schema provides.
- `transformErrors`: This event is provided when the VAFS receives the list of JSON Schema validation errors and can return a transformed list. It replaces the messages with a set of default messages, as well as any messages provided for specific fields in uiSchema. It also moves the errors for required fields from the object level to the field level. Because JSON Schema specifies required fields with a `required` array on an object field schema, any errors about missing data are associated with that object and moved so they're associated with the missing field and rendered with that field on the form.
- `onError`: This event is called if a user tries to submit a form with a validation error. The VAFS sets a `submitted` flag in `formContext`, which is an object passed to all fields and components in the RJSF form. The `FieldTemplate` component uses `formContext` to display all error messages to the user.
- `onSubmit`: This event is called when a user submits a form with no validation errors. When this happens, the VAFS code looks for the next page in the multi-page form and navigates to it.
- `onChange`: This event is called when a user changes data in the form. The VAFS fires a Redux action and updates the store with the new data. The reducer code does several recalculations:
  - **Recalculate the required fields for the schema:** You can specify functions in uiSchema that set fields as optional or required based on form data. This runs them and updates the schema.
  - **Recalculate which schema fields are hidden and remove that data:** In uiSchema, you can specify fields that are conditionally hidden based on user data. To avoid validation errors from data a user can't see, the VAFS updates the schema to add a `ui:hidden` property and remove any user data for those fields.
  - **Recalcuate general schema updates:** Because you can make arbitrary changes to the schema based on form data, the VAFS must also make those changes, for example, removing options in an `enum` array when a user has entered certain data.

## Supporting multi-page forms

Large forms are organized into *chapters* and *pages*. A chapter is a collection of pages, each rendered as a single RJSF form with a schema and `uiSchema` field component. The chapter and page organization is described in a form config file that the VAFS uses to generate a list of routes. A user can move through the list of pages until they reach the review page.

The review page also takes the config file and renders each chapter in an accordion panel. Inside a panel, the VAFS uses RJSF to render each page in a read-only view. This view uses simplified widgets and a different `FieldTemplate` component to render each form field in a definition list. The read-only view uses the RJSF `Form` component with no input elements, rendering instead with text. When a user on the review page clicks Edit for a form page, the normal widgets are used and a normal form is rendered.

Each array item on a review page is rendered as read-only, and individual items can be edited independently. To accomplish this, the review `ArrayField` component renders each item in the array as its own RJSF `Form`. In addition, array fields are taken from the page's read-only view and rendered separately.

## Customizing fields and widgets from RJSF

- [Customizing default fields and widgets](#customizing-default-fields-and-widgets)
- [Adding your own custom widgets](#adding-your-own-custom-widgets)
- [Custom field components](#custom-field-components)

### Customizing default fields and widgets
You can override any default field and widget, including the internal widgets like the `CheckboxWidget` that `ObjectField` renders for boolean values. You can override any field and widget just by providing the customized fields/widgets in the `fields` and `widgets` props:

```js
const schema = {
  type: "boolean",
  default: true
};

const uiSchema = {
  "ui:widget": "checkbox"
};

const CustomCheckbox = function(props) {
  return (
    <button id="custom" className={props.value ? "checked" : "unchecked"} onClick={() => props.onChange(!props.value)}>
        {String(props.value)}
    </button>
  );
};

const widgets = {
  CheckboxWidget: CustomCheckbox
};

ReactDOM.render((
  <Form schema={schema}
        uiSchema={uiSchema}
        widgets={widgets} />
), document.getElementById("app"));
```

This allows you to create a reusable customized form class with your custom fields and widgets:

```js
const customFields = {StringField: CustomString};
const customWidgets = {CheckboxWidget: CustomCheckbox};

function MyForm(props) {
  return <Form fields={customFields} widgets={customWidgets} {...props} />;
}
```

The default fields you can override are:

- `ArrayField`
- `BooleanField`
- `DescriptionField`
- `MultiSchemaField`
- `NullField`
- `NumberField`
- `ObjectField`
- `SchemaField`
- `StringField`
- `TitleField`
- `UnsupportedField`

The default widgets you can override are:

- `AltDateTimeWidget`
- `AltDateWidget`
- `CheckboxesWidget`
- `CheckboxWidget`
- `ColorWidget`
- `DateTimeWidget`
- `DateWidget`
- `EmailWidget`
- `FileWidget`
- `HiddenWidget`
- `PasswordWidget`
- `RadioWidget`
- `RangeWidget`
- `SelectWidget`
- `TextareaWidget`
- `TextWidget`
- `UpDownWidget`
- `URLWidget`

### Adding your own custom widgets

You can provide your own custom widgets to a uiSchema for the following json data types:

- `string`
- `number`
- `integer`
- `boolean`

```js
const Form = JSONSchemaForm.default;
const schema = {
  type: "string"
};

const uiSchema = {
  "ui:widget": (props) => {
    return (
      <input type="text"
        className="custom"
        value={props.value}
        required={props.required}
        onChange={(event) => props.onChange(event.target.value)} />
    );
  }
};
```

The following props are passed to custom widget components:

- `id`: The generated ID for this field.
- `schema`: The JSON schema subschema object for this field.
- `uiSchema`: The uiSchema for this field.
- `value`: The current value for this field.
- `placeholder`: The placeholder for the field, if any.
- `required`: The required status of this field.
- `disabled`: Set to `true` if the widget is disabled.
- `readonly`: Set to `true` if the widget is read-only.
- `autofocus`: Set to `true` if the widget should autofocus.
- `onChange`: The value change event handler; call it with the new value every time it changes.
- `onKeyChange`: The key change event handler (only called for fields with `additionalProperties`); pass the new value every time it changes.
- `onBlur`: The input blur event handler; call it with the the widget ID and value.
- `onFocus`: The input focus event handler; call it with the the widget ID and value.
- `options`: A map of options passed as a prop to the component (see [Custom widget options](#custom-widget-options).
- `formContext`: The `formContext` object that you passed to `Form`.
- `rawErrors`: An array of strings listing all generated error messages from encountered errors for this widget.

#### Custom component registration
Alternatively, you can register them all at once by passing the widgets prop to the Form component, and reference their identifier from the uiSchema:

```js
const MyCustomWidget = (props) => {
  return (
    <input type="text"
      className="custom"
      value={props.value}
      required={props.required}
      onChange={(event) => props.onChange(event.target.value)} />
  );
};

const widgets = {
  myCustomWidget: MyCustomWidget
};

const schema = {
  type: "string"
};

const uiSchema = {
  "ui:widget": "myCustomWidget"
}
```

This is useful if you expose the uiSchema as pure JSON, which can't carry functions.

#### Custom widget options

If you need to pass options to your custom widget, you can add a `ui:options` object containing those properties. If the widget has `defaultProps`, the options will be merged with the (optional) options object from `defaultProps`:

```js
const schema = {
  type: "string"
};

function MyCustomWidget(props) {
  const {options} = props;
  const {color, backgroundColor} = options;
  return <input style={{color, backgroundColor}} />;
}

MyCustomWidget.defaultProps = {
  options: {
    color: "red"
  }
};

const uiSchema = {
  "ui:widget": MyCustomWidget,
  "ui:options": {
    backgroundColor: "yellow"
  }
};
```

**Note:** This also applies to [registered custom components](#custom-component-registration).

#### Customizing widgets text input

All the widgets that render a text input use the `BaseInput` component internally. If you need to customize all text inputs without customizing all widgets individually, you can provide a `BaseInput` component in the widgets property of Form (see [Custom component registration](#custom-component-registration)).

### Custom field components

You can provide your own field components to a uiSchema for basically any json schema data type, by specifying a `ui:field` property.

For example, let's create and register a `geo` component handling a latitude and a longitude:

```js
const schema = {
  type: "object",
  required: ["lat", "lon"],
  properties: {
    lat: {type: "number"},
    lon: {type: "number"}
  }
};

// Define a custom component for handling the root position object
class GeoPosition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...props.formData};
  }

  onChange(name) {
    return (event) => {
      this.setState({
        [name]: parseFloat(event.target.value)
      }, () => this.props.onChange(this.state));
    };
  }

  render() {
    const {lat, lon} = this.state;
    return (
      <div>
        <input type="number" value={lat} onChange={this.onChange("lat")} />
        <input type="number" value={lon} onChange={this.onChange("lon")} />
      </div>
    );
  }
}

// Define the custom field component to use for the root object
const uiSchema = {"ui:field": "geo"};

// Define the custom field components to register; here our "geo"
// custom field component
const fields = {geo: GeoPosition};

// Render the form with all the properties we just defined passed
// as props
ReactDOM.render((
  <Form
    schema={schema}
    uiSchema={uiSchema}
    fields={fields} />
), document.getElementById("app"));
```

**Note:** Registered fields can be reused across the entire schema.

#### Field props

A field component will always be passed the following props:

- `schema`: The JSON schema for this field.
- `uiSchema`: The uiSchema for this field.
- `idSchema`: The tree of unique ids for every child field.
- `formData`: The data for this field.
- `errorSchema`: The tree of errors for this field and its children.
- `registry`: A `registry` object.
- `formContext`: A `formContext` object.

#### The `registry` object

The `registry` is an object containing the registered custom fields and widgets as well as the root schema definitions.

- `fields`: The custom registered fields. By default this object contains the standard `SchemaField`, `TitleField` and `DescriptionField` components.
- `widgets`: The custom registered widgets, if any.
- `rootSchema`: The root schema, which can contain referenced definitions.
- `formContext`: The `formContext` object.
- `definitions`: Equal to rootSchema.definitions.

The registry is passed down the component tree, so you can access it from your custom field and `SchemaField` components.

#### Custom `SchemaField`
**Warning:** This feature can override the whole form behavior and easily mess it up, so be careful when using this feature.

You can provide your own implementation of the `SchemaField` base React component for rendering any JSON schema field type, including objects and arrays. This is useful when you want to augment a given field type with supplementary powers.

To proceed, pass a fields object having a SchemaField property to your Form component; here's an example:

```js
const CustomSchemaField = function(props) {
  return (
    <div id="custom">
      <p>Yeah, I'm pretty dumb.</p>
      <div>My props are: {JSON.stringify(props)}</div>
    </div>
  );
};

const fields = {
  SchemaField: CustomSchemaField
};

const schema = {
  type: "string"
};
```

Props passed to a custom `SchemaField` are the same as the ones passed to a custom field.
