class Stories::Search
  include SearchObject.module(:paging)

  scope { Story.with_preloads.all }

  option(:filter) do |scope, value|
    value == 'popular' ? scope.popular : scope.by_date
  end

  per_page 2

  def total_pages
    @total_pages ||= (count / per_page.to_f).ceil
  end
end
