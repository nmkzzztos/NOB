<script>
  jQuery(function($){
    $('a[href*="#"]').on('click.smoothscroll', function( e ){
      var hash    = this.hash, _hash   = hash.replace(/#/,''), theHref = $(this).attr('href').replace(/#.*/, '');
      if( theHref && location.href.replace(/#.*/,'') != theHref ) return;
      var $target = _hash === '' ? $('body') : $( hash + ', a[name="'+ _hash +'"]').first();
      if( ! $target.length ) return;
      e.preventDefault();
      $('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 400, 'swing', function(){
        window.location.hash = hash;
      });
    });
  });
</script>

<nav id="nav__link">
    <ul>
        <li><a href="#box1">file:/C:/Users/Anton/Desktop/notebookofebbign/index.html#box2</a></li>
        <li><a href="#box2">file:/C:/Users/Anton/Desktop/notebookofebbign/index.html#box3</a></li>
    </ul>
</nav>

<script>
        jQuery(function)
