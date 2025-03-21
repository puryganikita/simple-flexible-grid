# simple-flexible-grid

This is a simple solution for creating flexible css grids.
The ready-to-use files are located in the `/dist` folder.
The solution runs on css, without using JavaScript. 

><span style="color:#ECCC34;font-weight:700;">WARNING!</span>
> The solution did not go through the postprocessing stage, 
> in order to provide more flexibility for postprocessing 
> in the final project. From the point of view of optimization, 
> when using this solution, the correct solution is to use 
> postprocessing, for example, `purgecss` to remove unnecessary 
> classes in the production assembly.

## Usage

### Base Usage

- Place the contents of the `/dist/scss` or `/dist/css` folder in your project.
- Connect the `simple-flexible-grid.css` or `simple-flexible-grid.scss` file to your entry point.
- Use the grid-container class to designate a flexible container.
- Use the grid-item class to designate an item.
- Use a class that indicates the size of the grid item using the formula `<breakpoint>-<size>` (for example `xs-12`). 

```html
<div class="grid-container">
    <div class="grid-item xs-5"></div>
    <div class="grid-item xs-7"></div>
    <div class="grid-item xs-6 md-12"></div>
    <div class="grid-item xs-6 md-12"></div>
    <div class="grid-item xs-12"></div>
</div>
```

### Spacing

Use css variables "--row-gap" and "--column-gap" to create spacing between grid elements.

```html
<div class="grid-container" style="--row-gap: 20px; --column-gap: 30px;">
    <div class="grid-item xs-5"></div>
    <div class="grid-item xs-7"></div>
    <div class="grid-item xs-6 md-12"></div>
    <div class="grid-item xs-6 md-12"></div>
    <div class="grid-item xs-12"></div>
</div>
```

### Breakpoints

The following breakpoints are configured by default.

```
xs: 0px
sm: 600px
md: 900px
lg: 1200px
xl: 1536px
```

### SCSS Features

#### Custom Grid Columns 

You can use the `create-grid-item($columns)` mixin located in `/dist/scss/_utils.scss` 
to create items with any number of columns. 

```scss
@use 'utils';

.custom-item {
  @include utils.create-grid-item(24);
}
```

```html
<div class="grid-container">
    <div class="custom-item xs-10"></div>
    <div class="custom-item xs-14"></div>
    <div class="custom-item xs-12 md-24"></div>
    <div class="custom-item xs-12 md-24"></div>
    <div class="custom-item xs-24"></div>
</div>
```

#### Custom Breakpoints

You can change the variable `$breakpoints` (`/dist/scss/_vars.scss`) 
as you wish to add any breakpoints.

```scss
$breakpoints: (
  bp1: 0,
  bp2: 600,
);
```

```html
<div class="grid-container">
    <div class="custom-item bp1-12"></div>
    <div class="custom-item bp1-6 bp2-12"></div>
</div>
```

#### Custom Class Prefix

You can specify your own prefix for the classes `.grid-container` and `.grid-item`. 
To do this, change the value of the `$class-prefix` variable (`/dist/scss/_vars.scss`) 
to your own.

```scss
$class-prefix: 'custom-name';
```

```html
<div class="custom-name-container">
    <div class="custom-name-item xs-6"></div>
    <div class="custom-name-item xs-6"></div>
</div>
```
