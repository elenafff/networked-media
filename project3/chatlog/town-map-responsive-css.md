# Making the Town Map Responsive

## Question

The town map on my website looks distorted on other devices. The positions were measured in pixels at a window size of **1494 × 1038**. Can you convert them to percentages so the locations stay in the same place on every device?

### Original CSS

```css
/* town map page */
.map{
    position: relative;
    top: 20px;
}
.back{
    width: 100%;
    position: absolute;
}
.building{
    width: 100%;
    display: block;
}
/* locations */
.convenience-store {
    position: absolute;
    top: 145px;
    left: 50px;
    width: 500px;
}

.river {
    position: absolute;
    top: 530px;
    left: 942px;
    width: 520px;
}

.theme-park {
    position: absolute;
    top: 510px;
    left: 300px;
    width: 520px;
}

.tower {
    position: absolute;
    top: 15px;
    left: 868px;
    width: 325px;
}
```

## Answer

Horizontal values (`left`, `width`) are divided by **1494**. Vertical values (`top`) are divided by **1038**.

| Location | left | top | width |
|---|---|---|---|
| Convenience store | 50 / 1494 = **3.35%** | 145 / 1038 = **13.97%** | 500 / 1494 = **33.47%** |
| River | 942 / 1494 = **63.05%** | 530 / 1038 = **51.06%** | 520 / 1494 = **34.81%** |
| Theme park | 300 / 1494 = **20.08%** | 510 / 1038 = **49.13%** | 520 / 1494 = **34.81%** |
| Tower | 868 / 1494 = **58.1%** | 15 / 1038 = **1.45%** | 325 / 1494 = **21.75%** |

### Converted CSS

```css
/* town map page */
.map {
    position: relative;
    top: 20px;
}

.back {
    width: 100%;
    display: block;
}

.building {
    width: 100%;
    display: block;
}

.convenience-store {
    position: absolute;
    left: 3.35%;
    top: 13.97%;
    width: 33.47%;
}

.river {
    position: absolute;
    left: 63.05%;
    top: 51.06%;
    width: 34.81%;
}

.theme-park {
    position: absolute;
    left: 20.08%;
    top: 49.13%;
    width: 34.81%;
}

.tower {
    position: absolute;
    left: 58.1%;
    top: 1.45%;
    width: 21.75%;
}
```

### Notes

- **`.back` is no longer `position: absolute`.** It is now a normal block, so the background image gives `.map` its real height. Percentage `top` values are measured against `.map`'s height. If the background stays absolute, `.map` collapses to zero height and every building ends up at the top.
- **Percentage `top` uses the map's height, not the window's.** Dividing by 1038 assumes the map image was about 1038px tall on the original screen. If the buildings look slightly too high or too low, check the background image's actual rendered height in DevTools and divide the original `top` pixel values by that number instead.
