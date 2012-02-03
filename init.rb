require 'redmine'

Redmine::Plugin.register :redmine_issue_tabs do
  name 'redmine issue tabs'
  author 'cforce'
  author_url "https://github.com/cforce"
  description 'show tab "all comments" in issue view'
  url "https://github.com/cforce/redmine_issue_tabs"
  version '0.0.1'
  
  requires_redmine :version_or_higher => '1.1.2'
end

class IssueTabsViewListener < Redmine::Hook::ViewListener

  # Adds javascript
  def view_layouts_base_html_head(context)
    javascript_include_tag('dsv-issue-tabs.js', :plugin => :redmine_issue_tabs)
  end

end
