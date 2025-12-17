# Cache

import org.springframework.stereotype.Service;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.CachePut;

@Service
public class CachingArticlesService implements ArticlesService {

```
private final ArticlesRepository articlesRepository;

public CachingArticlesService(ArticlesRepository articlesRepository) {
    this.articlesRepository = articlesRepository;
}

@Override
@Cacheable(value = "articles", key = "#articleId")
public Article getArticle(Long articleId) {
    return articlesRepository.get(articleId);
}

@Override
@CacheEvict(value = "articles", key = "#articleId")
public void removeArticle(Long articleId) {
    articlesRepository.remove(articleId);
}

@Override
public void saveArticle(Article article) {
    articlesRepository.save(article);
}

@Override
@CachePut(value = "articles", key = "#articleId")
public Article updateLikes(Long articleId, int likes) {
    return articlesRepository.updateLikes(articleId, likes);
}

```

}

Explicación:
@Cacheable("articles") en getArticle: Si el artículo con articleId ya está en caché, se devuelve directamente sin consultar articlesRepository.get().

@CacheEvict("articles") en removeArticle: Elimina el artículo del caché cuando se borra del repositorio.

saveArticle sin anotación: No almacena en caché, solo guarda en el repositorio.

@CachePut("articles") en updateLikes: Actualiza el artículo en el caché y en el repositorio.