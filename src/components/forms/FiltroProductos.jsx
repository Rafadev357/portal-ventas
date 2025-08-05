import React, { useState } from 'react'

export const FiltroProductos = ({onFiltrar}) => {
    const [min, setMin] = useState(40);
    const [max, setMax] = useState(200);
    const minPrecio = 0;
    const maxPrecio = 200;


    const fijarPrecioMin = (e)=>{
        const valorMin = Math.min(+e.target.value, max - 1);
        console.log(valorMin);
        setMin(valorMin)
    };

    const fijarPrecioMax = (e)=>{
        const valorMax = Math.max(+e.target.value, min + 1);
        console.log(valorMax);
        setMax(valorMax);
    };
    const filtarProductos = (e)=>{
        e.preventDefault();
        const form = e.target;
        const filtros = new FormData (form);
        const filtrosJson = Object.fromEntries(filtros.entries());
        console.log(filtrosJson);
        onFiltrar(filtrosJson);
    };
  return (
    <>
        <h3>Filtro productos</h3>
        <form method='get' onSubmit={filtarProductos}>
            <label htmlFor="marca">
                Marcas:
                <select name='marca'>
                    <option value="Nike">Nike</option>
                    <option value="Adidas">Adidas</option>
                    <option value="Munich">Munich</option>
                    <option value="Joma">Joma</option>
                    <option value="Lotto">Lotto</option>
                    <option value="Mizuno">Mizuno</option>
                    <option value="Kappa">Kappa</option>
                    <option value="DC">DC</option>
                    <option value="Ecko UnItd">Ecko UnItd</option>
                    <option value="Emerica">Emerica</option>
                    <option value="Converse">Converse</option>
                    <option value="Zoo york">Zoo york</option>
                    <option value="Vans">Vans</option>
                    <option value="Under armour">Under armour</option>
                    <option value="On">On</option>
                </select>
            </label>
            <label htmlFor="precio" className='slide'>
                Rango de precios:
                <span> {min} - </span><span>{max}</span>
                <input type="range" name="precio_min" id="precio_min"
                    min={minPrecio}
                    max={maxPrecio}
                    value={min}
                    onChange={fijarPrecioMin}
                    className='slide__min'
                />
                <input type="range" name="precio_max" id="precio_max"
                    min={minPrecio}
                    max={maxPrecio}
                    value={max}
                    onChange={fijarPrecioMax}
                    className='slide__max'
                />
            </label>
            <label htmlFor="talla">
                Talla:
                <select name='talla_elegido' defaultValue=''>
                    <option value= '' disabled>Elige una talla</option>
                    <option value="27"> 27 </option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    <option value="32">32</option>
                    <option value="33">33</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                    <option value="46">46</option>
                    <option value="47">47</option>
                    <option value="48">48</option>
                </select>
            </label>
            <label htmlFor="color">
                Color:
                <select name='color_elegido'>
                    <option value="azul">Azul</option>
                    <option value="negro">Negro</option>
                    <option value="plateado">Plateado</option>
                    <option value="marron">Marrón</option>
                    <option value="naranja">Naranja</option>
                    <option value="rosa">Rosa</option>
                    <option value="verde">Verde</option>
                    <option value="blanco">Blanco</option>
                </select>
            </label>
            <div className="form__button">
                <button type='reset'>Reiniciar</button>
                <button type='submit'>Filtrar</button>
            </div>
        </form>
    </>
  )
}
