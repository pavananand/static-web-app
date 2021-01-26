import { Component, OnInit } from '@angular/core';
declare var jQuery:any;

@Component({
  selector: 'app-chat-widget',
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.css']
})
export class ChatWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (function($) {
      $(document).ready(function() {
          var $chatbox = $('.chatbox'),
              $chatboxTitle = $('.chatbox__title'),
              $chatboxTitleClose = $('.chatbox__title__close'),
              $chatboxCredentials = $('.chatbox__credentials');
          $chatboxTitle.on('click', function() {
              $chatbox.toggleClass('chatbox--tray');
          });
          $chatboxTitleClose.on('click', function(e) {
              e.stopPropagation();
              $chatbox.addClass('chatbox--closed');
          });
          $chatbox.on('transitionend', function() {
              if ($chatbox.hasClass('chatbox--closed')) $chatbox.remove();
          });
          $chatboxCredentials.on('submit', function(e) {
              e.preventDefault();
              $chatbox.removeClass('chatbox--empty');
          });
      });
  })(jQuery);
  }

}
