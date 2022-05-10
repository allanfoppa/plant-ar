
It's not as simple as adding the meta type, since a-text is not just displaying characters, it's rendering them in the engine.
So there are three ways I can think of:

1) The proper way: find or generate a font from a fontset containing those characters. The docs describe how to use [custom fonts](https://aframe.io/docs/0.8.0/components/text.html#custom-fonts):

```
<a-entity
  text="text: Hello World;
  font: ../fonts/CustomFnt.fnt;
  fontImage: ../fonts/CustomFnt.png"
></a-entity>
```

But you need to have a font file + a .png grid with the font images. The docs provide a link to a [tool](https://libgdx.com/wiki/) for generating fonts, as well as a [tutorial](https://libgdx.com/wiki/).

2) check out Don McCurdy's custom font [generator](https://msdf-bmfont.donmccurdy.com/) !

3) The workaround: You could make a transparent image containing Your text and put it on an ```<a-plane>```, like I did [here](https://glitch.com/edit/#!/lively-index?path=index.html:1:0). (que é colocar uma imagem com o texto)
