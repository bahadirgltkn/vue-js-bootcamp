<template>
    <div class="container">
        <div class="header">
               <slot name="title"></slot>
        </div>

        <hr>

        <div class="content my-2">
            <slot name="content"></slot>
        </div>
        
        <slot name="default"></slot>
        <!-- <slot/> istersek default slotu bu sekilde de kullanabiliriz -->
        <hr>

        <div class="footer text-right">
            <button>Kapat</button>
            <button class="green">Kaydet</button>
        </div>
    </div>
</template>