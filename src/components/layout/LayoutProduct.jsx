import React from 'react'

export const LayoutProduct = () => {
  return (
    <div className='layout__product'>
      <main className='layout__content'>
        <section className='layout information'>
          <div className='layout__img'>imagen</div>
          <div className='layout__desc'>
            <h3>Descripción producto</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec augue feugiat, porta ex at, 
                bibendum tortor. Integer eleifend mattis mauris sed tempor. Duis ac quam aliquet, facilisis ex non, sodales turpis. 
                Pellentesque ut turpis odio. Etiam ac auctor ante, nec egestas quam. Nam nec purus ut leo condimentum malesuada nec in eros. 
                Donec at nibh ex. Sed sit amet ligula ac ligula mattis gravida id vitae urna. Nam egestas fringilla magna,
                sed pellentesque neque convallis a. Sed placerat lorem sit amet ante placerat semper. Mauris pellentesque, 
                sapien laoreet fringilla varius, tellus elit euismod diam, dapibus porttitor massa mi iaculis justo. 
                Aliquam sed interdum velit. Quisque molestie mauris sit amet velit consequat, a mattis massa facilisis. 
                Cras malesuada, ipsum sit amet fringilla eleifend, arcu turpis sollicitudin dolor, nec malesuada metus libero non orci. 
                Nullam elementum tempus turpis, et molestie erat bibendum sit amet. Sed scelerisque faucibus hendrerit.
                Vestibulum ac tellus luctus, posuere leo ac, ultricies eros. Nulla neque massa, facilisis sit amet pellentesque nec, 
                scelerisque sit amet justo. Morbi vulputate consectetur leo in maximus. Morbi odio ligula, malesuada vitae enim hendrerit, 
                varius tristique risus. Nulla sagittis dui nec sagittis tempor. Pellentesque in dictum nunc, ac posuere risus. 
                Quisque vitae sem mollis, dictum dolor ac, dignissim felis. Aliquam justo eros, auctor nec suscipit sit amet, 
                cursus ut mi. Nunc arcu libero, cursus ac ultricies vitae, dapibus id nunc.
                Suspendisse justo sem, auctor vel euismod nec, fringilla a ipsum. Sed hendrerit non elit ut semper. 
                Ut imperdiet, velit quis condimentum pellentesque, arcu magna ultrices quam, vitae suscipit mi massa ac purus. 
                Ut fringilla lorem vitae neque consectetur, at porttitor ante blandit. In rutrum eros et sodales egestas. 
                Integer pharetra egestas eros vel commodo. Fusce laoreet erat ac pellentesque viverra. Aliquam eget luctus massa. 
                Nam vel felis sapien. In ultricies ligula nec turpis vulputate vestibulum. Cras non purus nec enim pellentesque posuere. 
            </p>
          </div>
        </section>
        <section className='layout function'>
          <div>
            <ul></ul>
            <span>Precio</span>
          </div>
          <div>
            <p>Aquí va el botón de añadir al carro y el botón de guardar en favoritos</p>
          </div>
        </section>
      </main> 
      <aside></aside>
    </div>
  )
}
