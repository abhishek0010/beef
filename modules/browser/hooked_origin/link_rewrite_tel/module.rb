#
# Copyright (c) 2006-2025 Wade Alcorn - wade@bindshell.net
# Browser Exploitation Framework (BeEF) - https://beefproject.com
# See the file 'doc/COPYING' for copying permission
#
class Link_rewrite_tel < BeEF::Core::Command
  def self.options
    [
      { 'ui_label' => 'Number', 'name' => 'tel_number', 'description' => 'New telephone number', 'value' => '5558585', 'width' => '200px' }
    ]
  end

  def post_execute
    save({ 'result' => @datastore['result'] })
  end
end
